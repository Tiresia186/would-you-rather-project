import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class Dashboard extends Component {
    render() {
      

        return (
            <div className='dash-container'>
                <div className='dash-polls-box'>
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab='Answered' key='1'>
                            <ul>
                               
                            </ul>
                        </TabPane>
                        <TabPane tab='NOT Answered' key='2'>
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                    <h3>ciarpame dashboard</h3>
                </div>
            </div>
        );
    }
}
function mapStateToProps({ polls, users, authedUser }) {
    const answeredQuestionsByUser = Object.keys(users[authedUser].answers);
    const unansweredQuestionsByUser = Object.values(polls).filter((p) => !answeredQuestionsByUser.includes(p.id))

    return {
        polls: polls,
        users: users,
        authedUser: authedUser,
        answeredQuestionsByUser,
        unansweredQuestionsByUser
    };
}
export default connect(mapStateToProps)(Dashboard);
