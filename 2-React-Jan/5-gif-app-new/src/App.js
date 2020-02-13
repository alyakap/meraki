import React from "react";

function App() {
  return (
    <div class="input-group md-form form-sm form-2 pl-0">
      <input
        class="form-control my-0 py-1 pink-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="input-group-append">
        <span class="input-group-text pink lighten-3" id="basic-text1">
          <i class="fas fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default App;
