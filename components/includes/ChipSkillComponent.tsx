import { Button } from "@material-tailwind/react"

export const ChipSkillComponent = ({data}:any) => {
    return (
        <div className="flex space-x-2">
            {
                data.map((ele:any, idx: number) => (
                    <Button variant="gradient" color="blue" className="rounded-full" key={idx}>{ele.name}</Button>
                ))
            }
        </div>
    )
}