import * as React from "react";
import { connect } from "react-redux";
import { UsersPropsInterface } from "./ducks/types";
import { Dispatch, bindActionCreators } from "redux";
import { getUsers, getUserRepo } from "./ducks/actions";

import {ApplicationStateInterface} from "../app/ducks/types";
import Tab from "./component/tab";
import LeftComponent from "./component/leftPanel";
import RightComponent from "./component/rightPanel"

class USERLIST extends React.Component<
UsersPropsInterface
> {
    constructor(props: UsersPropsInterface) {
        super(props);
       
    }
    public componentWillMount(): void {
      this.props.action.getUsers();
      this.props.action.getUserRepo()
    }
   
public render(): JSX.Element {
  console.log(this.props,"prppr")
        return (
            <>
                <Tab />
                <div className="width_container_liquid">
                  <LeftComponent usersList={this.props.usersList}/>
                  <RightComponent repoList={this.props.repoList}/>
                </div>
              
            </>
        );
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    action: {
      getUsers: bindActionCreators(getUsers, dispatch),
      getUserRepo:bindActionCreators(getUserRepo,dispatch)
      
    }
});
const mapStateToProps = (state: ApplicationStateInterface) => ({
  usersList:state.UserList.usersList,
  repoList:state.UserList.repoList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(USERLIST);