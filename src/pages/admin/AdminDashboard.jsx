import axios from 'axios';
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../store/currentUserAttom';

export const AdminDashboard = () => {
    
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    useEffect(() => {
        const fetchUser = async () => {
            try {
              const res = await axios.get('http://localhost:5555/api/v1/admin/profile');
            //   setCurrentUser(response.data);
                console.log(res);
            } catch (error) {
              console.error('Failed to fetch user', error);
            }
          };
      
          fetchUser();
    }, [])
    console.log(document.cookie);
  return (
    <>
    <div>AdminDashboard</div>
    </>
  )
}
