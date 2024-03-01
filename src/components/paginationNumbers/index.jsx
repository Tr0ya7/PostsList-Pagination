import { useState } from "react"

export const PaginationNumbers = ({ onClick }) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [numberClicked, setNumberClicked] = useState(1) //sempre que algo mudar deve se declarar um useState para sempre funcionar, caso contrário nada funciona

    //para mudar algo de somente um elemento deve ter uma function recebendo o valor e passando para um useState esse valor

    const numberOnClick = (number) => {
        setNumberClicked(number)
    }

    return (
        <ul className={`flex gap-x-3 justify-center mt-5`}>
            {numbers.map((number) => 
                <li 
                    key={number} 
                    className={`cursor-pointer ${numberClicked === number ? 'font-bold' : ''}`} 
                    onClick={() => { numberOnClick(number); onClick(number) }}
                >
                    {number}
                </li>
            )}
        </ul>
    )
}