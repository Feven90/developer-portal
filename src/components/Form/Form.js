import React from 'react';
import propTypes from 'prop-types';
// import './ListingForm.scss';
import authRequests from '../../helpers/data/authRequests';
// import tutorialRequest from '../../helpers/data/listingRequests';

const defaultMaterials = {
  name: '',
  // link: '',
  // radioButton: '',
  tutorialRadioButton: false,
};

class Form extends React.Component {
  static propTypes = {
    onSubmit: propTypes.func,
    // isEditing: propTypes.bool,
    // editId: propTypes.string,
  }

  state = {
    newMaterial: defaultMaterials,
  }

  // radioButtonEvent = () => {

  // };

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempMaterial = { ...this.state.newMaterial };
    // spread operator, making a copy of state, just for caution if we
    // modify here we don't want it to be modified in state too.
    tempMaterial[name] = e.target.value;
    this.setState({ newMaterial: tempMaterial });
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  // radioButtonChange = (e) => {
  //   this.formFieldStringState('radioButton', e);
  // }

  // radioButtonClick = (e) => {
  //   this.setState({ radioButton: 'true' });
  //   return 'true';
  // };

  //  state = {
  //    selectedOption: 'option1',
  //  }


  formSubmit = (e) => {
    e.preventDefault();
    // const {newListing} = this.state;
    const { onSubmit } = this.props;
    const myMaterial = { ...this.state.newMaterial };
    myMaterial.uid = authRequests.getCurrentUid();
    onSubmit(myMaterial);
    this.setState({ newMaterial: defaultMaterials });
  }

  // componentDidUpdate(prevProps) {
  //   const { isEditing, editId } = this.props;
  //   if (prevProps !== this.props && isEditing) {
  //     listingRequests.getSingleListing(editId)
  //       .then((listing) => {
  //         this.setState({ newListing: listing.data });
  //       })
  //       .catch(err => console.error('error with getSingleListing', err));
  //   }
  // }

  render() {
    const { newMaterial } = this.state;
    const { isEditing, radioButton, handleChange } = this.props;
    const title = () => {
      if (isEditing) {
        return <h2>Edit Listing: </h2>;
      }
      return <h2>Add New Listing: </h2>;
    };
    return (
      <div className="listing-form col">
        {title()}
      <form onSubmit={this.formSubmit}>
      <div className="form-group">
        <label htmlFor="address">Name:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="addressHelp"
            placeholder="234 Edge Moor Dr, 21783"
            value={newMaterial.name}
            onChange={this.nameChange}
            />
        </div>
        {/* <label>Name:</label>
        <input type="input"></input>
       <label>Link:</label>
        <input type="input"></input> */}
          <div>
            <input type="radio"
              id="radio_tutorials"
              // name="radio_tutorials"
              value="radio_tutorials"
              checked={radioButton === 'radio_tutorials'}
              onChange={handleChange}
            />
              <label>Tutorials</label>
            <input type="radio"
              id="radio_blogs"
              name="radio_blogs"
              value="radio_blogs"
              checked={radioButton === 'radio_blogs'}
              onChange={handleChange}
              />
            <label>Blogs</label>
            <input type="radio" id="resources" name="resources" value="resources"/>
              <label>Resources</label>
            <input type="radio" id="podcasts" name="podcasts" value="podcasts"/>
              <label>Podcasts</label>
              </div>
        <button className="btn btn-danger">+</button>
      </form>
  </div>
    );
  }
}

export default Form;

// class Form extends React.Component {
//   render() {
//     return (
//       <div className="listings col">
//        <label>Name:</label>
//         <input type="input"></input>
//        <label>Link:</label>
//         <input type="input"></input>
//           <div>
//             <input type="radio" id="tutorial" name="tutorial" value="tutorial"/>
//               <label for="Tutorials">Tutorials</label>
//             <input type="radio" id="blogs" name="blogs" value="blogs"/>
//               <label for="Blogs">Blogs</label>
//             <input type="radio" id="resources" name="resources" value="resources"/>
//               <label for="Resources">Resources</label>
//             <input type="radio" id="podcasts" name="podcasts" value="podcasts"/>
//               <label for="Podcasts">Podcasts</label>
//           </div>
//       </div>
//     );
//   }
// }

// export default Form;
