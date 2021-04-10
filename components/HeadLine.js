import classes from './HeadLine.module.css'

export function HeadLine(props) {
    return (
        <div>
            <h1 className={classes.title}>{props.page}Page</h1>
            <p className={classes.description}>
                Get started by editing {props.children}
            </p>
        </div>
    )
}
