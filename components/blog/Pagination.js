import Link from "next/link"

export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>
            <div className="pagination-area text-center mt-50 mb-30">
                <ul className="pagination list-inline">
                    {getPaginationGroup.length <= 0 ? null : (
                        <li onClick={prev} className="list-inline-item page-item prev">
                            {currentPage === 1 ? null : (
                                <a className="page-link">
                                    <i className="athena-left" />
                                </a>
                            )}
                        </li>
                    )}

                    {getPaginationGroup.map((item, index) => {
                        return (
                            <li
                                onClick={() => handleActive(item)}
                                key={index}
                                className={
                                    currentPage === item
                                        ? "list-inline-item page-item active"
                                        : "list-inline-item page-item"
                                }
                            >
                                <a className="page-link">{item}</a>
                            </li>
                        )
                    })}

                    {getPaginationGroup.length <= 0 ? null : (
                        <li onClick={next} className="list-inline-item page-item next">
                            {currentPage >= pages ? null : (
                                <a className="page-link">
                                    <i className="athena-right" />
                                </a>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}