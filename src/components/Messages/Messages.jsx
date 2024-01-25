import React from 'react';
import s from './Messages.module.css';

const Messages= () => {
 return <div className = {s.dialogs}>
    <div className={s.dialogItems}>
        <div className={s.dialog}>
            Luna
        </div>
        <div className={s.dialog}>
            Max
        </div>
        <div className={s.dialog}>
            Rokie
        </div>
        <div className={s.dialog}>
            Daisy
        </div>
        <div className={s.dialog}>
            Bella
        </div>
    </div>
    <div className={s.messages}>
        <div className={s.message}>
        "Chasing my tail and loving it! #SimpleJoys"
        </div>
        <div className={s.message}>
        "Sniffed a flower today. 10/10, would sniff again. #SimplePleasures"
        </div>
        <div className={s.message}>
        "Napped. Ate. Wagged. Repeat. #DogLife101"
        </div>
        <div className={s.message}>
        "Met a friendly cat. We nodded. Mutual respect achieved.  #CasualEncounters"
        </div>

    </div>
    </div>

}


export default Messages;