/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20
  }
};


class Body extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false
    };
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  handleTouchTap() {
    this.setState({
      open: true
    });
  }

  render() {
    const standardActions = (
        <FlatButton
            label="Ok"
            primary={true}
            onTouchTap={this.handleRequestClose}
        />
    );

    return (
          <div style={styles.container}>
            <Dialog
                open={this.state.open}
                title="Super Secret Password"
                actions={standardActions}
                onRequestClose={this.handleRequestClose}
            >
              1-2-3-4-5
            </Dialog>
            <h1>Material-UI</h1>
            <h2>example project</h2>
            <RaisedButton
                label="Super Secret Password"
                secondary={true}
                onTouchTap={this.handleTouchTap}
            />
            <List>
              <Subheader>Nested List Items</Subheader>
              <ListItem primaryText="投资收益" leftIcon={<ContentSend />} />
              <ListItem primaryText="退出账户" leftIcon={<ContentDrafts />} />
              <ListItem
                  primaryText="投资"
                  leftIcon={<ContentInbox />}
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
          <ListItem
            key={1}
            primaryText="Starred"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail"
            leftIcon={<ContentSend />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />
            ]}
          />
        ]}
              />
            </List>
            <List>
              <Subheader>Nested List Items</Subheader>
              <ListItem primaryText="投资收益2" leftIcon={<ContentSend />} />
              <ListItem primaryText="退出账户2" leftIcon={<ContentDrafts />} />
              <ListItem
                  primaryText="投资2"
                  leftIcon={<ContentInbox />}
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
          <ListItem
            key={1}
            primaryText="Starred  2"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail  2"
            leftIcon={<ContentSend />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts  2" leftIcon={<ContentDrafts />} />
            ]}
          />
        ]}
              />
            </List>
          </div>
    );
  }
}

export default Body;
