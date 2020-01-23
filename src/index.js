import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version, Tabs, Icon } from "antd";
import "antd/dist/antd.css";
import "./index.css";
const { TabPane } = Tabs;
ReactDOM.render(
  <div className="App container mx-auto">
  <div className="rounded-lg bg-white shadow-md">
    <div className="p-4 text-xl font-medium border border-0 border-b-1">You are off to a great start</div>
    <div className="card-container fancy-tab">
    <Tabs type="card" tabPosition="left">
      <TabPane tab={<div><Icon type="check-circle" theme="filled" className="text-xl text-green-800" /> Add Product</div>} key="1">
        <div className="flex justify-between py-4">
          <div className="flex-auto">
          <div className="flex flex-col items-start">
            <div className="text-lg font-medium">
              You have added new products
            </div>
            <div className="text-xs">
              Add more products or move on to another tip.
            </div>
            <div className="mt-10">
              <a href="#" className="bg-purple-800 rounded text-white p-2">
              Add another product
              </a>
            </div>
            <div className="mt-10">
              <a href="#" className="rounded-full border border-teal-600 text-gray-800 p-4">
                <Icon type="question-circle" className="text-xl pr-1 text-teal-600 hover:text-teal-600" /> Learn more about products
              </a>
            </div>
            </div>
          </div>
          <div className="w-32">
            <img src="https://cdn.shopify.com/s/assets/admin/home/onboarding/home-onboard-prod-complete-a6f218ca2009b9a3d21ab21d90aa7573f8de9785a4af49cd248cf3b1846d8f8a.svg" alt="" />
          </div>
        </div>
      </TabPane>
      <TabPane tab={<div><Icon type="arrow-right" /> Customize Quote Package</div>} key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab={<div><Icon type="question-circle" /> Add Domain Emails</div>} key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
  </div>
  </div>,
  document.getElementById("root")
);
