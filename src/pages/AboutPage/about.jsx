import Nav from "../../Components/nav";
import Footer from "../../Components/footer";

import "./about.css";

const About = () => {
  return (
    <>
      <Nav />

      <div className="about-me">
        <div className="about-me-left">
          <h1>
            Know who <span>I AM</span>
          </h1>
          <p>
            Hey everyone! I am <span>Ayush Kathayat</span> from{" "}
            <span>Haldwani, India</span>. Currently pursuing a BE in CSE at
            Chandigarh University. Eager to dive into the world of software
            development and explore its endless possibilities.{" "}
          </p>
        </div>
        <div className="about-me-right">
          <img src="/about.svg" alt="about" />
        </div>
      </div>

      <div className="about-skills">
        <h1>
          {" "}
          Professional <span>Skillset</span>
        </h1>

        <div className="rows-wrapper">

          <div className="row">
            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path
                  d="M12.207 16.278C11.1241 17.343 9.63879 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C9.67492 6 11.1896 6.6863 12.278 7.79303L13.6923 6.37878C12.2418 4.91014 10.2272 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20C10.1911 20 12.1764 19.1192 13.6212 17.6923L12.207 16.278Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15 9H13V11H11V13H13V15H15V13H17V11H15V9Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20 9H22V11H24V13H22V15H20V13H18V11H20V9Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M5.304 16.563c0-0.095-0.050-0.183-0.132-0.23l-2.192-1.261c-0.037-0.022-0.079-0.033-0.121-0.035-0.004 0-0.020 0-0.023 0-0.042 0.002-0.083 0.013-0.121 0.035l-2.191 1.261c-0.082 0.047-0.133 0.135-0.133 0.23l0.005 3.396c0 0.047 0.025 0.091 0.066 0.114 0.041 0.024 0.091 0.024 0.132 0l1.302-0.746c0.082-0.049 0.132-0.135 0.132-0.23v-1.587c0-0.094 0.050-0.182 0.132-0.229l0.555-0.319c0.041-0.024 0.086-0.035 0.133-0.035 0.045 0 0.091 0.012 0.132 0.035l0.554 0.319c0.082 0.047 0.132 0.135 0.132 0.229v1.587c0 0.095 0.051 0.181 0.133 0.23l1.302 0.746c0.041 0.024 0.092 0.024 0.132 0 0.040-0.023 0.066-0.067 0.066-0.114l0.004-3.396zM17.006 11.894c-0.041-0.023-0.091-0.022-0.131 0.002s-0.065 0.067-0.065 0.114v3.363c0 0.033-0.018 0.064-0.046 0.080s-0.064 0.017-0.093 0l-0.549-0.316c-0.082-0.047-0.183-0.047-0.265 0l-2.192 1.265c-0.082 0.047-0.133 0.135-0.133 0.229v2.531c0 0.095 0.050 0.182 0.132 0.229l2.192 1.266c0.082 0.047 0.183 0.047 0.265 0l2.193-1.266c0.082-0.048 0.132-0.135 0.132-0.229v-6.309c0-0.096-0.052-0.184-0.136-0.231l-1.305-0.728zM16.803 18.331c0 0.024-0.012 0.046-0.033 0.057l-0.753 0.434c-0.020 0.012-0.046 0.012-0.066 0l-0.753-0.434c-0.021-0.012-0.033-0.034-0.033-0.057v-0.869c0-0.024 0.013-0.046 0.033-0.057l0.753-0.435c0.020-0.012 0.046-0.012 0.066 0l0.753 0.435c0.020 0.012 0.033 0.034 0.033 0.057v0.869zM24.85 17.439c0.081-0.047 0.132-0.134 0.132-0.229v-0.613c0-0.095-0.050-0.181-0.132-0.229l-2.178-1.265c-0.082-0.048-0.183-0.048-0.265-0l-2.192 1.265c-0.082 0.047-0.132 0.135-0.132 0.229v2.53c0 0.095 0.051 0.183 0.134 0.23l2.178 1.241c0.080 0.046 0.179 0.046 0.26 0.001l1.317-0.732c0.041-0.023 0.067-0.067 0.068-0.115s-0.025-0.092-0.066-0.116l-2.206-1.266c-0.041-0.023-0.066-0.067-0.066-0.115v-0.793c0-0.047 0.025-0.091 0.066-0.115l0.687-0.395c0.041-0.023 0.091-0.023 0.132 0l0.687 0.395c0.041 0.024 0.066 0.067 0.066 0.115v0.624c0 0.047 0.025 0.091 0.066 0.115s0.092 0.023 0.133-0l1.312-0.763zM9.291 15.090c0.082-0.047 0.183-0.047 0.265 0l2.192 1.265c0.082 0.047 0.132 0.134 0.132 0.229v2.532c0 0.095-0.051 0.182-0.132 0.229l-2.192 1.266c-0.082 0.047-0.183 0.047-0.265 0l-2.192-1.266c-0.082-0.047-0.132-0.135-0.132-0.229v-2.532c0-0.095 0.050-0.182 0.132-0.229l2.192-1.265zM29.106 20.647c-0.075 0-0.151-0.020-0.217-0.058l-0.69-0.408c-0.103-0.058-0.052-0.078-0.019-0.090 0.137-0.048 0.165-0.059 0.312-0.142 0.015-0.009 0.036-0.005 0.052 0.004l0.53 0.315c0.019 0.011 0.046 0.011 0.064 0l2.067-1.193c0.019-0.011 0.031-0.033 0.031-0.056v-2.386c0-0.023-0.012-0.045-0.032-0.057l-2.066-1.192c-0.019-0.011-0.045-0.011-0.064 0l-2.066 1.192c-0.020 0.011-0.033 0.034-0.033 0.057v2.386c0 0.023 0.013 0.044 0.032 0.055l0.566 0.327c0.307 0.154 0.495-0.027 0.495-0.209v-2.355c0-0.033 0.027-0.059 0.060-0.059h0.262c0.033 0 0.060 0.026 0.060 0.059v2.355c0 0.41-0.223 0.645-0.612 0.645-0.119 0-0.214 0-0.476-0.129l-0.542-0.312c-0.134-0.077-0.217-0.222-0.217-0.377v-2.386c0-0.155 0.083-0.3 0.217-0.377l2.067-1.194c0.131-0.074 0.305-0.074 0.434 0l2.067 1.194c0.134 0.077 0.217 0.222 0.217 0.377v2.386c0 0.155-0.083 0.299-0.217 0.377l-2.067 1.193c-0.066 0.038-0.141 0.058-0.218 0.058zM29.745 19.004c-0.905 0-1.094-0.415-1.094-0.764 0-0.033 0.026-0.059 0.060-0.059h0.267c0.030 0 0.055 0.022 0.059 0.051 0.040 0.272 0.16 0.41 0.708 0.41 0.435 0 0.621-0.099 0.621-0.329 0-0.133-0.052-0.232-0.729-0.298-0.565-0.056-0.915-0.181-0.915-0.633 0-0.417 0.352-0.666 0.941-0.666 0.662 0 0.99 0.23 1.031 0.723 0.002 0.017-0.004 0.033-0.016 0.046s-0.027 0.019-0.044 0.019h-0.268c-0.028 0-0.052-0.020-0.058-0.047-0.064-0.286-0.221-0.378-0.645-0.378-0.475 0-0.531 0.166-0.531 0.29 0 0.151 0.065 0.194 0.707 0.279 0.635 0.084 0.937 0.203 0.937 0.649 0 0.45-0.375 0.708-1.030 0.708zM22.506 17.321c0.016-0.009 0.035-0.009 0.051 0l0.421 0.243c0.016 0.009 0.026 0.026 0.026 0.044v0.486c0 0.018-0.010 0.035-0.026 0.044l-0.421 0.243c-0.016 0.009-0.035 0.009-0.051 0l-0.42-0.243c-0.016-0.009-0.025-0.026-0.025-0.044v-0.486c0-0.018 0.010-0.035 0.025-0.044l0.42-0.243z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 34 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
                <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
              </svg>
            </div>
          </div>

          <div className="row">
            
            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <title></title>
                <path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <title></title>
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M26.852 15.281l-9.848-9.848c-0.567-0.567-1.487-0.567-2.054 0l-2.045 2.045 2.594 2.594c0.603-0.204 1.294-0.067 1.775 0.413 0.483 0.483 0.619 1.181 0.41 1.786l2.5 2.5c0.605-0.209 1.303-0.074 1.786 0.41 0.675 0.675 0.675 1.769 0 2.444s-1.769 0.675-2.445 0c-0.508-0.508-0.633-1.254-0.376-1.88l-2.332-2.332v6.136c0.164 0.082 0.32 0.19 0.457 0.327 0.675 0.675 0.675 1.769 0 2.445-0.675 0.675-1.77 0.675-2.444 0-0.675-0.676-0.675-1.77 0-2.445 0.167-0.167 0.36-0.293 0.566-0.377v-6.193c-0.206-0.084-0.399-0.209-0.566-0.377-0.511-0.511-0.634-1.262-0.372-1.889l-2.557-2.558-6.753 6.752c-0.567 0.568-0.567 1.488 0 2.055l9.849 9.848c0.567 0.567 1.486 0.567 2.054 0l9.802-9.802c0.567-0.567 0.567-1.488 0-2.055z"></path>
              </svg>
            </div>
          </div>

          <div className="row">
            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <title></title>
                <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756v-5.164c0-1.47-1.24-2.574-2.712-2.819-0.932-0.155-1.898-0.226-2.825-0.221s-1.813 0.083-2.592 0.221c-2.295 0.405-2.712 1.254-2.712 2.819v2.067h5.423v0.689h-7.459c-1.576 0-2.956 0.947-3.388 2.75-0.498 2.066-0.52 3.355 0 5.512 0.385 1.606 1.306 2.75 2.882 2.75h1.865v-2.478c0-1.79 1.549-3.369 3.388-3.369zM12.933 8.649c-0.562 0-1.018-0.461-1.018-1.030 0-0.572 0.455-1.037 1.018-1.037 0.56 0 1.018 0.465 1.018 1.037 0 0.57-0.457 1.030-1.018 1.030zM26.826 13.465c-0.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717 0.505 3.363 0.596 5.417 0 1.365-0.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-0.689h8.129c1.576 0 2.163-1.099 2.712-2.75 0.566-1.699 0.542-3.332 0-5.512zM19.033 23.794c0.562 0 1.018 0.461 1.018 1.030 0 0.572-0.456 1.037-1.018 1.037-0.56 0-1.018-0.465-1.018-1.037 0-0.57 0.457-1.030 1.018-1.030z"></path>
              </svg>
            </div>

            <div className="tech-icons-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="tech-icon"
              >
                <path d="M12.557 23.22c0 0-0.982 0.571 0.699 0.765 2.037 0.232 3.079 0.199 5.324-0.226 0 0 0.59 0.37 1.415 0.691-5.033 2.157-11.39-0.125-7.437-1.23zM11.942 20.405c0 0-1.102 0.816 0.581 0.99 2.176 0.224 3.895 0.243 6.869-0.33 0 0 0.411 0.417 1.058 0.645-6.085 1.779-12.863 0.14-8.508-1.305zM17.127 15.63c1.24 1.428-0.326 2.713-0.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zM23.783 25.302c0 0 0.727 0.599-0.801 1.062-2.905 0.88-12.091 1.146-14.643 0.035-0.917-0.399 0.803-0.953 1.344-1.069 0.564-0.122 0.887-0.1 0.887-0.1-1.020-0.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-0.749 16.044-1.95zM13.029 17.489c0 0-4.673 1.11-1.655 1.513 1.274 0.171 3.814 0.132 6.181-0.066 1.934-0.163 3.876-0.51 3.876-0.51s-0.682 0.292-1.175 0.629c-4.745 1.248-13.911 0.667-11.272-0.609 2.232-1.079 4.046-0.956 4.046-0.956zM21.412 22.174c4.824-2.506 2.593-4.915 1.037-4.591-0.382 0.079-0.552 0.148-0.552 0.148s0.142-0.222 0.412-0.318c3.079-1.083 5.448 3.193-0.994 4.887-0 0 0.075-0.067 0.097-0.126zM18.503 3.337c0 0 2.671 2.672-2.534 6.781-4.174 3.296-0.952 5.176-0.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zM13.503 28.966c4.63 0.296 11.74-0.164 11.908-2.355 0 0-0.324 0.831-3.826 1.49-3.952 0.744-8.826 0.657-11.716 0.18 0 0 0.592 0.49 3.635 0.685z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="tools-used">
        <h1>
          <span>Tools</span> I Used
        </h1>

        <div className="tool-row">
          <div className="tool-icon-wrapper">
            <img src="/ubuntu-white.svg" alt="github" />
          </div>

          <div className="tool-icon-wrapper">
            <img src="/vscode.svg" alt="github" />
          </div>
          
          <div className="tool-icon-wrapper">
            <img src="/post.svg" alt="github" />
          </div>

          <div className="tool-icon-wrapper">
            <img src="/vercel.svg" alt="github" />
          </div>

          <div className="tool-icon-wrapper">
            <img src="/netlify.svg" alt="github" />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
