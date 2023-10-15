import { Spin } from "antd";
import { get, getDatabase, ref, update } from "firebase/database";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import app from "../Firebase";
const Card = () => {
  const { id } = useParams();
  const db = getDatabase(app);
  const fetchData = async () => {
    const cardRef = ref(db, `CustomerCards/${id}`);
    try {
      const dataSnapshot = await get(cardRef);
      if (dataSnapshot.exists()) {
        const cardData = dataSnapshot.val();
        const createrId = cardData.creatorUid;
        const tagid = cardData.assignTagId;
        const assigninfo = cardData.assignTagInfo;
        fetchTagsData(createrId, tagid, assigninfo);
      } else {
        console.log("No Data Found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTagsData = async (createrId, tagid, assigninfo) => {
    const tagRef = ref(db, `CustomersTags/${createrId}/${tagid}`);
    try {
      const dataSnapshot = await get(tagRef);
      if (dataSnapshot.exists()) {
        const cardData = dataSnapshot.val();
        const counter = cardData.sacanTime + 1;
        const newTagData = {
          ...cardData,
          sacanTime: counter,
        };
        await update(tagRef, newTagData);
        window.location.href = assigninfo;
      } else {
        console.log("No Data Found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin tip="Loading" style={{ fontSize: "20px" }} />
    </div>
  );
};

export default Card;
