import MultipleItems from "../Header/components/ReactSlick/components/MultipleItems";

export default function MainContentApp() {
    return (
        <>
            <div className="container-fluid c-position px-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="small-title c-text-white my-3">Novità su Netflix</h3>
                    </div>
                    <div className="row">
                        <MultipleItems />
                    </div>
                </div>
            </div>
        </>
    )
}