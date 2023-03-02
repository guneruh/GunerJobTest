
type Props={
    name: string;
    nationality: string;
    colors: string;
}

function Strawhat(props:Props){  
   const  {name,nationality,colors}= props

    return <div className={colors}  >
    {name} Is {nationality}!</div>
    
    
    
    }
    export default Strawhat