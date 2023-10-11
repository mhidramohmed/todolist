import { useRef, useState } from 'react'
import './App.css'

function App() {

    const [list, setlist] = useState([])
    const [x, setX] = useState('')

    const inputref = useRef()

    const newitem = { completed: false, x }

    const addtodo = () => {
        if (x) {
            setlist([...list, newitem])

            inputref.current.value = ''
            setX('')
        }
    }

    const delettodo = () => {

        setlist([])



    }

    const handlecompled = (index) => {
        const newlist = [...list];
        newlist[index].completed = !newlist[index].completed
        setlist(newlist)

    }
    const deleteitem = (index) => {
        let removeItem = list.slice();
        removeItem.splice(index, 1);
        setlist(removeItem)


    }

    return (
        <div className='App'>
            <h1>To Do List</h1>
            <div className='content'>
                <ul>
                    {
                        list.map((e, index) => {
                            return <div className='list'>
                                <li className={e.completed ? 'done' : ''} onClick={() => handlecompled(index)}>{e.x}</li>
                                <button className='x' onClick={() => { deleteitem(index) }}>❌</button>
                            </div>
                        })
                    }

                </ul>
                <div>
                    <input type='text' className='input' placeholder='Add new one ...' ref={inputref} onChange={e => { setX(e.target.value) }} />
                </div>

                <div>
                    <button className='add' onClick={addtodo} >Add</button>
                    <button className='delet' onClick={delettodo} >DeletAll</button>

                </div>

            </div>

        </div>
    )
}

export default App