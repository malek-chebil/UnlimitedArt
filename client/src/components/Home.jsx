import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header
          className="masthead text-center text-white"
          style={{
            background:
              "url(https://w.wallhaven.cc/full/k9/wallhaven-k9ke37.jpg)",
          }}
        >
          <div className="masthead-content">
            <div className="container">
              <h1 className="masthead-heading mb-0">unlimited art</h1>
              <h2 className="masthead-subheading mb-0">First .. Platform </h2>
              <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          {/* <div className="bg-circle-4 bg-circle"></div> */}
        </header>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/03.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">FreeLancers</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/02.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">Clients</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="img/01.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Our Team</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
