import * as React from "react";
import { connect } from "react-redux";
import { UserPostDetailPropsInterface } from "./ducks/types";
import { Dispatch, bindActionCreators } from "redux";
import {getUserPostDetail,getUserPostComment,getUserPostDeleted} from "./ducks/actions";
import {ApplicationStateInterface} from "../app/ducks/types";

export interface UserPostDetailStateInterface {
    commentIsOpen: boolean;
}

    class UserPostDetail extends React.Component<
    UserPostDetailPropsInterface,UserPostDetailStateInterface
> {
    constructor(props: UserPostDetailPropsInterface) {
        super(props);
        this.state={
            commentIsOpen:false,
        }
        this.deletePost = this.deletePost.bind(this)
    }
    
    public componentWillMount():void{
        // @ts-ignore
        if(this.props.match.params.id){
            // @ts-ignore
            this.props.action.getUserPostDetail(this.props.match.params.id)
        }
    }
    public componentWillReceiveProps(
        nextProps: UserPostDetailPropsInterface
    ): void {
        if(nextProps.deleteId !== undefined && nextProps.deleteId !== this.props.deleteId && nextProps.userPostsDetail !== undefined){
            this.props.history.push(`/posts/${nextProps.userPostsDetail.userId}`)
        }
    }
    public deletePost(id:number):void{
        this.props.action.getUserPostDeleted(id)
    }
    public handleToggle(): void {
         this.props.action.getUserPostComment({
                // @ts-ignore
            postId:this.props.match.params.id
        })
        const newState =
        { ...this.state, commentIsOpen: !this.state.commentIsOpen }
        this.setState({
            ...newState
        });
    }
    public render(): JSX.Element {
        return (
            <>
                {this.props.userPostsDetail !== undefined && 
                    <div className="userPostComment">
                        <div className="postBody fleft">
                            <div className="postName">{this.props.userPostsDetail.body}</div>
                            <div className="postName">{this.props.userPostsDetail.title}</div>
                        </div>
                        <div className="fright deleteButton" onClick = {this.deletePost.bind(this,this.props.userPostsDetail.id)}><i className="fa fa-trash" aria-hidden="true"></i></div>
                    </div>
               }
                <div className="clearall" />
                    <div
                        className="accordion_container"
                        onClick={() => this.handleToggle()}
                    >
                        <div
                            className={`accordion_header ${
                                this.state.commentIsOpen ? `expanded` : `collapsed`
                            }`}
                        >
                            <div className="fleft accord_heading_label">
                               View Comments
                            </div>
                            <div className="fright arrow" />
                            <div className="clearall" />
                        </div>
                        <div className="accordion_body">
                            {this.props.userPostComment.length > 0 && (
                                <ul>
                                    {this.props.userPostComment.map(el => {
                                    return ( <React.Fragment>
                                        <li>{el.body}</li>
                                    </React.Fragment>)
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: {
       getUserPostDetail: bindActionCreators(getUserPostDetail, dispatch),
       getUserPostComment:bindActionCreators(getUserPostComment,dispatch),
       getUserPostDeleted:bindActionCreators(getUserPostDeleted,dispatch),
    }
});
const mapStateToProps = (state: ApplicationStateInterface) => ({
    userPostsDetail:state.UserPostDetail.userPostsDetail,
    userPostComment:state.UserPostDetail.userPostComment,
    deleteId:state.UserPostDetail.deleteId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPostDetail);