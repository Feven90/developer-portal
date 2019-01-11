import React from 'react';
import propTypes from 'prop-types';
import './Form.scss';
import authRequests from '../../helpers/data/authRequests';
// import tutorialRequest from '../../helpers/data/listingRequests';

const defaultMaterials = {
  name: '',
  link: '',
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

  linkChange = (e) => {
    this.formFieldStringState('link', e);
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
    return (
      <div className="listing-form col">
      <form onSubmit={this.formSubmit}>
      <div className="form-group">
        <div className="d-flex flex-row">
          <label htmlFor="address" className=" wrap-form">Name</label>
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
          <div className="d-flex flex-row wrap-form">
              <label htmlFor="link">Link</label>
            <input
              type="text"
              className="form-control"
              id="link"
              aria-describedby="linkHelp"
              placeholder="www.habesha.com"
              value={newMaterial.link}
              onChange={this.linkChange}
              />
          </div>
        </div>

        {/* <label>Name:</label>
        <input type="input"></input>
       <label>Link:</label>
        <input type="input"></input> */}
          <div className="radio_wrap">
            <div className="radio_buttons">
            <label>
              <input type="radio"
                className="radio"
                id="radio_tutorials"
                name="radio_tutorials"
                value="radio_tutorials"
                checked={radioButton === 'radio_tutorials'}
                onChange={handleChange}
              />
              Tutorials
            </label>
              </div>
              <div className="radio_buttons">
            <label>
              <input type="radio"
                id="radio_blogs"
                className="radio"
                name="radio_blogs"
                value="radio_blogs"
                checked={radioButton === 'radio_blogs'}
                onChange={handleChange}
              />
              Blogs
            </label>
            </div>
            <div className="radio_buttons">
            <label>
              <input type="radio"
                className="radio"
                id="radio_resources"
                name="radio_resources"
                value="radio_resources"
                checked={radioButton === 'radio_resources'}
                onChange={handleChange}
              />
            Resources
            </label>
            </div>
            <div className="radio_buttons">
            <label>
              <input type="radio"
                className="radio"
                id="radio_podcasts"
                name="radio_podcasts"
                value="radio_podcasts"
                checked={radioButton === 'radio_podcasts'}
                onChange={handleChange}
              />
              Podcasts
            </label>
              </div>
              </div>
        <button className="btn btn-danger">+</button>
      </form>
  </div>
    );
  }
}

export default Form;
