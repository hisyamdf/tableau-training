import React, { useState, useEffect } from "react";
import axios from "axios";

const Simbara = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchToken = () => {
      const options = {
        method: "POST",
        url: "https://api.insw.go.id/api/tableau/ticket-tableau",
        headers: {
          "Content-Type": "application/json",
          key: 'pZ66hobzPpXBn2bMHVPTz0wG1pxuWQdo',
        },
        data: { username: "admin" },
      };
      axios
        .request(options)
        .then(function (response) {
          setData(response.data.ticket);
          console.log(response.data.ticket);
          let scriptableau = document.getElementById("tableauscript");
          if (!scriptableau) {
            const script = document.createElement("script");
            script.id = "tableauscript";
            script.src = "https://bi.insw.go.id/javascripts/api/viz_v1.js";
            script.async = true;
            document.body.appendChild(script);
          } else {
            scriptableau.remove();
            const script = document.createElement("script");
            script.id = "tableauscript";
            script.src = "https://bi.insw.go.id/javascripts/api/viz_v1.js";
            script.async = "./test.js";
            document.body.appendChild(script);
          }
          // console.log(response.data.ticket)
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchToken();
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div
            class="tableauPlaceholder"
            style={{ width: "100%", height: "100%" }}
          >
            <object
              class="tableauViz"
              width="100%"
              height="820"
              style={{ display: "none" }}
            >
              <param name="host_url" value="https%3A%2F%2Fbi.insw.go.id%2F" />{" "}
              <param name="embed_code_version" value="3" />{" "}
              <param name="site_root" value="" />
              <param name="name" value="Batubara&#47;S-Batubara" />
              <param name="ticket" value={data} />
              <param name="tabs" value="no" />
              <param name="toolbar" value="yes" />
              <param name="origin" value="card_share_link" />
              <param name="showAppBanner" value="false" />
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simbara;
