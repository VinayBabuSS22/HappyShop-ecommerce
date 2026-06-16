import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadSeller } from "../redux/actions/user";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("loading");
  const called = useRef(false);

  useEffect(() => {
    if (activation_token && !called.current) {
      called.current = true;

      const activateAccount = async () => {
        try {
          await axios.post(
            `${server}/shop/activation`,
            { activation_token },
            { withCredentials: true }
          );
          await dispatch(loadSeller());
          setStatus("success");
          toast.success("Your shop account has been activated successfully!");
          setTimeout(() => navigate("/dashboard"), 2000);
        } catch (err) {
          setStatus("error");
          const message =
            err.response?.data?.message ||
            (err.message === "Network Error"
              ? "Cannot connect to server. Please ensure the backend is running."
              : "Your activation link is invalid or has expired.");
          toast.error(message);
        }
      };

      activateAccount();
    }
  }, [activation_token, dispatch, navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {status === "loading" && <p>Activating your shop account...</p>}
      {status === "success" && (
        <>
          <p>Your shop account has been created successfully!</p>
          <p>Redirecting you to the dashboard...</p>
        </>
      )}
      {status === "error" && (
        <>
          <p>Shop account activation failed.</p>
          <button
            type="button"
            onClick={() => navigate("/shop-login")}
            className="text-blue-600 underline"
          >
            Go to Shop Login
          </button>
        </>
      )}
    </div>
  );
};

export default SellerActivationPage;
