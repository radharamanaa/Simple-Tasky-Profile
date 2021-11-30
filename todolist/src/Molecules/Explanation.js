import './Explanation.css'

export default function Explanation({text}) {
    return (
        <div class="explanation">
            <p className="explanation-text">
                {text}
            </p>
        </div>
    );
}
