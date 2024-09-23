function Todo2() {

    let todoName = "go To College"
    let todoDate = "5/10/2023"

  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-4 todoItem">{todoName}</div>
        <div class="col-4 todoItem">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo2;
