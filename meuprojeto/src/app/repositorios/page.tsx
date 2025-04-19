"use client"

import { useState, useEffect } from "react"

interface DataProps {
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      url: string;
    }
  }
  

export default function Repositorios() {

    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() => {
        async function fetchData() {
            fetch("http://api.github.com/users/WillianRRP/repos")
                .then((response) => response.json())
                .then((data: DataProps[]) => {
                   setTimeout(() => {
                    setRepos(data)
                   }, 2000)
                })
                .catch((error) => console.error("Error fetching data:", error))
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Página repositórios</h1>
            {repos.map((item) => (
        <div key={item.id}>
          <strong>Repositório:</strong> <a>{item.name}</a>
          <br/><br/>
        </div>  
        ))}
        </div>
    )
}