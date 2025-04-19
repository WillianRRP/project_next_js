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


async function getData(){
  // http://api.github.com/users/WillianRRP/repos
  const res = await fetch("http://api.github.com/users/WillianRRP/repos")
    
return res.json()

}


export default async function Home(){
  const data:DataProps[] = await getData()
 

  return(
    <main>
      <h1>oi</h1>
      <span>seja bem vindo</span>
      <br/>

      <h3>Meus Repositóriods</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório:</strong> <a>{item.name}</a>
          <br/><br/>
        </div>  

      ))}
    </main>
  )
}