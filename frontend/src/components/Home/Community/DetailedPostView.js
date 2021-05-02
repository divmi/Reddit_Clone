import React, { Component } from 'react';
// import Comment from './Comment';
import Post from './Post';
import backendServer from '../../../webConfig';
import Axios from 'axios';
import { getRelativeTime } from '../../../services/ControllerUtils';
import '../../styles/voteButtonStyles.css'

class DetailedPostView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.setLoader();
        Axios.post(backendServer + '/getCommentsWithPostID', { post_id: this.props.data._id })
            .then(response => {
                this.props.unsetLoader();
                this.setState({ comments: response.data });
            }).catch(err => {
                this.props.unsetLoader();
                console.log(err);
            });
    }

    render() {
        var commentsToRender = [];
        // var parentChildCommentList = {};
        if (this.state.comments) {
            var parentCommentList = this.state.comments.filter(comment => comment.isParentComment);
            console.log("BEFORE", parentCommentList);

            parentCommentList.forEach(parentComment => {
                var child = this.state.comments.filter(comment => comment.parentCommentID == parentComment._id);
                console.log("CHILDREN", child);
                console.log("PARENT BEFORE ADDING", parentComment);
                parentComment.child = child;
                console.log("PARENT AFTER ADDING", parentComment);
            });
            console.log("AFTER", parentCommentList);

            parentCommentList.forEach(comment => {
                // commentsToRender.push(<div>{comment.description}</div>)
                // comment.child.forEach(chi => {
                //     commentsToRender.push(<div>{"*" + chi.description}</div>)
                // })



                // let subComm = [];
                // let tempArr = [];
                // comment.child.forEach(chi => {
                //     subComm.push(<div>{"*" + chi.description}</div>);
                // })
                // tempArr.push(<div style={{ paddingLeft: '3%', }}>{subComm}</div>)
                // commentsToRender.push(<div>{comment.description}</div>)
                // commentsToRender.push(tempArr)
                // commentsToRender.push(<Card><div>{comment.description}</div></Card>) 



                commentsToRender.push(
                    <div>
                        <div style={{ marginTop: '10px' }}>
                            <img alt="" width="40px" style={{ borderRadius: '20px', margin: '5px' }} src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" />
                            <span style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>{comment.userID} {getRelativeTime(comment.createdAt)}</span>
                        </div>
                        <div style={{ fontSize: '14px', paddingLeft: '2%', borderLeft: '2px solid #edeff1', marginLeft: '2.5%' }}>
                            <div>{comment.description}</div>
                            <div>
                                <i style={{ cursor: "pointer" }} className="icon icon-arrow-up upvote" />
                                <span style={{ margin: '0 5px' }}><strong> 698 </strong></span>
                                <i className="icon icon-arrow-down downvote" />
                                <i className="fa fa-reply" style={{ marginLeft: '20px' }} />
                                <span className="postFooterSpan">Reply</span>
                            </div>
                        </div>
                    </div>
                );
                comment.child.forEach(chi => {
                    commentsToRender.push(
                        <div style={{ padding: '1% 4%', borderLeft: '2px solid #edeff1', marginLeft: '2.5%', fontSize: '14px' }}>
                            <div>
                                <img alt="" width="30px" style={{ borderRadius: '15px', margin: '2px' }} src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
                                <span style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>{comment.userID} {getRelativeTime(comment.createdAt)}</span>
                            </div>
                            <div style={{ fontSize: '14px', paddingLeft: '2%', borderLeft: '2px solid #edeff1', marginLeft: '2.5%' }}>
                                <div>{chi.description}</div>
                                <div>
                                    <i style={{ cursor: "pointer" }} className="icon icon-arrow-up upvote" />
                                    <span style={{ margin: '0 5px' }}><strong> 698 </strong></span>
                                    <i className="icon icon-arrow-down downvote" />
                                </div>
                            </div>
                        </div>
                    );
                })
            });

            // this.state.comments.forEach(comment => {
            //     commentsToRender.push(<Comment data={comment} />)
            // });
        }
        return (
            <React.Fragment>
                <Post data={this.props} detailedView={true} />
                <div style={{ paddingLeft: '20px' }}>{commentsToRender}</div>
            </React.Fragment>
        );
    }
}


export default DetailedPostView;