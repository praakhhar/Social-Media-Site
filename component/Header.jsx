import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header class="p-3 text-bg-dark header">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li></li>
            <li></li>
          </ul>

          <form
            class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          ></form>

          <div class="text-end">
            <button
              onClick={() => {
                navigate("/login");
              }}
              type="button"
              class="btn btn-outline-light me-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
