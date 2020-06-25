import * as React from "react";

export interface LeftComponentPropsInterface {
    usersList:any
}
class LeftComponent extends React.Component<LeftComponentPropsInterface>{
    constructor(props: LeftComponentPropsInterface) {
        super(props);
        
    }
    public render(): JSX.Element {
        console.log(this.props.usersList,"ss")
        return (
            <React.Fragment>
                <aside className="left_navigation">
                <img
                
                src={this.props.usersList.avatar_url}
                alt="user"
                style={{
                    width: 30,
                    height: 30,
                    padding: "0px 3px"
                }}
            />
                    </aside>
            </React.Fragment>
        );
    }

}
export default LeftComponent;
