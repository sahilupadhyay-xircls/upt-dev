import React from "react"
import { BarChart2, RefreshCcw, User } from "react-feather"

const FaDashboard = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h3 style={{ marginTop: "9px" }}>Dashboard</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <User size="27px" />
                <div className="d-flex mt-1 justify-content-between">
                  <p className="me-5 h5 card-text">New Accounts Created</p>
                  <h3>
                    0
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body ">
                <BarChart2 size="27px" />
                <div className="d-flex mt-1 justify-content-between">
                  <p className="me-5 h5 card-text">Revenue Generation from</p>
                  <h3>
                    0
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <RefreshCcw size="27px" />
                <div className="d-flex mt-1 justify-content-between">
                  <p className="me-0 h5 card-text">Registered Customers</p>
                  <h3>
                    0
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaDashboard
