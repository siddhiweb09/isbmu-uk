// 404Page.js
import React from "react";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center shadow-lg p-5">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <a href="/" class="btn btn-primary mt-5">
            Go Home
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
