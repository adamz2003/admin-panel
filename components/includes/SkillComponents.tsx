import { Button } from "@material-tailwind/react"

export const SkillComponent = ({data}:any) => {
    return (
        <div className="">
            {
                data.map((ele:any, idx: number) => (
                    <Button variant="gradient" color="blue" className="rounded-full inline-block" key={idx}>{ele.name}</Button>
                ))
            }
        </div>
    )
}