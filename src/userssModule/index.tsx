import * as React from "react";
import { connect } from "react-redux";
import { UsersPropsInterface,UsersResponseInterface } from "./ducks/types";
import { Dispatch, bindActionCreators } from "redux";
import { getUsers,setUserId } from "./ducks/actions";

import {ApplicationStateInterface} from "../app/ducks/types";

class USERLIST extends React.Component<
UsersPropsInterface
> {
    constructor(props: UsersPropsInterface) {
        super(props);
       this.gotonext = this.gotonext.bind(this);
    }
    public componentWillMount(): void {
      this.props.action.getUsers()
    }
    public gotonext(
      value:UsersResponseInterface): void {
      this.props.action.setUserId(value.id)
      // @ts-ignore
      this.props.location.history.push(`/posts/${value.id}`)
    }
public render(): JSX.Element {
        return (
            <>
                <div className="userPage">Users</div>
                {this.props.usersList.map(el => {
                  return (<div className="column">
                      <div className="columnText">{el.name}</div>
                      <div className="columnText">{el.company.name}</div>
                      <div className="columnText blogText" onClick = {this.gotonext.bind(this,el)}>Blog Posts</div>
                  </div>)
                })}
            </>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: {
      getUsers: bindActionCreators(getUsers, dispatch),
      setUserId:bindActionCreators(setUserId,dispatch)
    }
});
const mapStateToProps = (state: ApplicationStateInterface) => ({
  usersList:state.UserList.usersList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(USERLIST);