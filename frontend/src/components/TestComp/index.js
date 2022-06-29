import { useSelector } from "react-redux"

const TestComp = () => {
const reviews = useSelector(state => state.reviews)

return(
    <div>
   TEST
    </div>
)
}
export default TestComp;
