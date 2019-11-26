import React from 'react';
import { connect } from 'react-redux';
class AuthorInfo extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <p>{user.name}</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  //Taking out our logic from component
  return { user: state.user.find(user => user.id === ownProps.id) };
};
export default connect(mapStateToProps)(AuthorInfo);
// fetchUsers: () => dispatch(fetchUsers())
//this.props.user[this.props.id].name
