import React from "react";

const SearchForm = (props) => {
  // ----------------------------------
  // INITIAL FORM
  // ----------------------------------
  const initialForm = {
    artist: "",
    song: "",
  };
  // ----------------------------------
  // STATE
  // ----------------------------------
  const [form, setForm] = React.useState(initialForm);

  // ----------------------------------
  // HANDLE CHANGE
  // ----------------------------------
  // listen for input changes and update form variable using state (setForm)
  const handleChange = (event) => {
    event.preventDefault();
    setForm({
      // take copy of form
      ...form,
      // take the name input and make it a property then assign the value (artist: artist name)
      [event.target.name]: event.target.value,
    });
  };

  // ----------------------------------
  // HANDLE SUBMIT
  // ----------------------------------
  // grab the form data and sent to the app component
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(form);
    console.log(form);
    setForm(initialForm);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="artist"
          placeholder="Search for artist"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="search"
          name="song"
          placeholder="Search for song"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchForm;
