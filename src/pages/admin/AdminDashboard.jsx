import axios from 'axios';
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../store/currentUserAttom';

export const AdminDashboard = () => {
    
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    useEffect(() => {
        const fetchUser = async () => {
            try {
              const res = await axios.get('http://localhost:5555/api/v1/admin/profile',
              {
                withCredentials : true
              });
                console.log(res.data.user);
                if(res.data.success){
                  setCurrentUser(res.data.user)
                }
            } catch (error) {
              console.error('Failed to fetch user', error);
            }
          };
      
          fetchUser();
    }, [])
  return (
    <>
    <div>AdminDashboard</div>

    Name : {currentUser.firstName ? currentUser.firstName + " " + currentUser.lastName : "Loadding..."} 
    </>
  )
}
