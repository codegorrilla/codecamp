import { useState } from "react"
import data from "./data"
import styles from "./style.module.css"

export default function Accordion(){
    const [selected, setSelected] = useState(null)
    const[enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiSelect, setMultiSelect] = useState([])

    //single selection
    const handleSingleSelection = (getCurrentId)=>{
        //console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiSelection = (getCurrentId)=>{

    }

    return(
        <div className={styles.wrapper}>
            <button onClick = {()=> (setEnableMultiSelection(!enableMultiSelection))}>Enable Multi Selection</button>
            <div className={styles.accordion}>
                {
                    data && data.length > 0 ?
                    data.map(dataItem => 
                    <div key={dataItem.id} className={styles.item}>
                        <div onClick={enableMultiSelection ? 
                        ()=> handleMultiSelection(dataItem.id) : 
                        ()=> handleSingleSelection(dataItem.id)} 
                        className={styles.title}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {selected === dataItem.id ? <div className={styles.content}>{dataItem.answer}</div>: null}
                    </div>) : <div>No data found</div>
                }
            </div>
        </div>
    )
}