// frontend/practice/src/components/TabsComponents.jsx
import React, { useState,useEffect } from 'react'

const TabsComponents = () => {
    const [activeTab, setActiveTab] = useState(()=>{
        const saved=localStorage.getItem("ActiveTab")
        return saved? Number(saved):0;
    });

    useEffect(()=>{
        localStorage.setItem("activeTab", activeTab)
    },[activeTab])

    const tabs = [{
        name: "Home",
        content: (
            <div>
                <p>Home</p>
                <p>this is the home page</p>
            </div>

        )
    }, {
        name: "profile",
        content: (
            <div>
                <p>profile</p>
                <p>this is the profile page</p>
            </div>

        )
    }, {
        name: "setting",
        content: (
            <div>
                <p>setting</p>
                <p>this is the setting page</p>
            </div>

        )
    }]

    return (
        <div>
            {tabs.map((tab,index)=>(
                <button id={index} onClick={()=>setActiveTab(index) }style={{fontWeight: activeTab ===index? "bold" : "normal"}}>{tab.name}</button>
            ))}

            <div>
                {tabs[activeTab].content}
            </div>

        </div>
    )
}

 export default TabsComponents




