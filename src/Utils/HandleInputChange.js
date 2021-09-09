function HandleInputChange(e) {
  const { name, value } = e.currentTarget;

  this.setState({ [name]: value });
}
export default HandleInputChange;
