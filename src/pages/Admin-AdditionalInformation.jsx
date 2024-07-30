import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"

export const AdminAdditionalInformation = () =>{
const [info, setInfo] = useState([]);
const {authorizationToken}=useAuth();

    const getAllAdditionalData=async()=>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/additionalData",{
                method:"GET",
                headers:{
                    Authorization : authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`blood group ${data}`);
            setInfo(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteInfo=async(id)=>{
        try {
        const response = await fetch(`http://localhost:5000/api/admin/additionalData/delete/${id}`,{
            method:"DELETE",
            headers:{
                Authorization : authorizationToken,
            }
        });
        const data = await response.json();
        console.log(`blood group after delete ${data}`);
        if(response.ok){
            getAllAdditionalData();
        }  
    } catch (error) {
          console.log(error);  
    }
    }

    useEffect(()=>{
        getAllAdditionalData();
    },[]);
    return <>
    <section className="admin-users-section">
        <div className="container">
            <h1>Blood Donor's Information</h1>
        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {info.map((curInfo, index)=>{
                    return (
                        <tr key={index}>
                            <td>{curInfo.name}</td>
                            <td>{curInfo.bloodGroup}</td>
                            <td>{curInfo.location}</td>
                            <td><button onClick={()=>{
                                deleteInfo(curInfo._id)
                            }}>Delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </section>
    </>
}