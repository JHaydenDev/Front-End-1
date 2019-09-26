import React,{useState,useEffect} from 'react';
import moment from 'moment'
import CommitHistoryCards from './CommitHistoryCards'
import axios from 'axios';

function CommitHistory () {
  const [commit, setCommit] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/itava0/Best_City_Guide/commits")
      .then(res => {
        console.log(res.data)
        setCommit(res.data)
      }) 
      .catch(err => {
        console.log("The Data was not returned", err);
      });
  }, []);

 return (
       <div>
      {commit.map((item, key)=> {
        return (
          <CommitHistoryCards
           key={key}
           date={moment(item.commit.author.date).format('MMMM Do YYYY, h:mm:ss a')}
           message={item.commit.message}
           commit={item.commit.tree.sha}
          />
        );
      })}
    </div>
 )
}

export default CommitHistory;