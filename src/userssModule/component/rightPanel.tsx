import * as React from "react";

export interface LeftComponentPropsInterface {
    repoList:any
}
class RightComponent extends React.Component<LeftComponentPropsInterface>{
    constructor(props: LeftComponentPropsInterface) {
        super(props);
        this.state = {
            userListItem :this.props.repoList
        }
        
    }
    public render(): JSX.Element {
        console.log(this.props.repoList,"ss")
        return (
            <React.Fragment>
                <aside className="right_navigation">
                    {this.props.repoList.map((el:any)=>{
                        return(
                            <div>
                                <div>{el.name}</div>
                            </div>
                        )
                    })

                    }
                    </aside>
            </React.Fragment>
        );
    }

}
export default RightComponent;
