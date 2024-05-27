import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { currentUserState } from '../store/currentUserAttom';

export const HomePage = () => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    useEffect(() => {
        const fetchUser = async () => {
            try {
              const res = await axios.get('http://localhost:5555/api/v1/profile',
              {
                withCredentials: true,
              });
            //   setCurrentUser(response.data);
                console.log(res);
            } catch (error) {
              console.error('Failed to fetch user', error);
            }
          };
      
          fetchUser();
    }, [])
    
    
  return (
    <div>HomePage</div>
  )
}
