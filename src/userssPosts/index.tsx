import * as React from "react";
import { connect } from "react-redux";
import { UsersPostPropsInterface, UserPostResponseInterface } from "./ducks/types";
import { Dispatch, bindActionCreators } from "redux";
import {getUserPost, removePost} from "./ducks/actions";
import {ApplicationStateInterface} from "../app/ducks/types";

export interface UserPostStateInterface {
    currentPage: number;
    pageSize: number;
    totalRecords: number;
}

    class UserPost extends React.Component<
    UsersPostPropsInterface,UserPostStateInterface> {
    constructor(props: UsersPostPropsInterface) {
        super(props);
        this.state ={
            currentPage: 1,
            pageSize: 10,
            totalRecords: 100
        }
        this.userPostDetailClick = this.userPostDetailClick.bind(this);
        this.onNextPage = this.onNextPage.bind(this);
        this.onPrevPage = this.onPrevPage.bind(this);
    }
    
    public componentWillMount():void{
        // @ts-ignore
        if(this.props.userPosts.length <= 0 && (this.props.userId !== undefined || this.props.match.params.userId)){
            this.props.action.getUserPost({
                // @ts-ignore
               userId:this.props.userId || this.props.match.params.userId ,
               skip:0,
               limit:this.state.pageSize
           })
        }
        if(this.props.deleteId !== undefined){
            this.props.action.removePost(this.props.deleteId);
        }
    }
    public userPostDetailClick(value:UserPostResponseInterface):void{
      this.props.history.push(`/postsdetail/${value.id}`)
    }
    public onPrevPage() {
        if (this.state.currentPage > 1) {
            this.setState({ currentPage: this.state.currentPage - 1 },
                () => {
                    // call api to get data
                    this.props.action.getUserPost({
                        // @ts-ignore
                       userId:this.props.userId || this.props.match.params.userId ,
                       skip:this.state.currentPage,
                       limit:this.state.pageSize
                   })
                });
        }
    }
    public onNextPage() {
        const maxPages = Math.ceil(this.state.totalRecords/this.state.pageSize);
        if (this.state.currentPage < maxPages) {
            this.setState({ currentPage: this.state.currentPage + 1 },
                () => {
                    this.props.action.getUserPost({
                        // @ts-ignore
                       userId:this.props.userId || this.props.match.params.userId ,
                       skip:this.state.currentPage,
                       limit:this.state.pageSize
                   })
                });
        }
    }
    public render(): JSX.Element {
        return (
            <>
                <div className="postTitle">User Posts</div>
                {this.props.userPosts.map(el => {
                  return (<div className="userPost">
                      <div className="postList" onClick={this.userPostDetailClick.bind(this,el)}>{el.title}</div>
                  </div>)
                })}
                <div>
                    <button onClick={this.onPrevPage}>Prev</button>
                    {this.state.currentPage}
                    <button onClick={this.onNextPage}>Next</button>
                </div>
            </>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: {
        getUserPost: bindActionCreators(getUserPost, dispatch),
        removePost:bindActionCreators(removePost,dispatch)
    }
});
const mapStateToProps = (state: ApplicationStateInterface) => ({
    userPosts:state.UserPost.userPosts,
    userId:state.UserList.userId,
    deleteId:state.UserPostDetail.deleteId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPost);