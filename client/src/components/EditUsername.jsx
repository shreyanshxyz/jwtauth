function EditUsername() {
  return (
    <div>
      <h1>Edit Username</h1>
      <form>
        <div className="input-container">
          <label>New </label>
          <input type="text" name="newUsername" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default EditUsername;
