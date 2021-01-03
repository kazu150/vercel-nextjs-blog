import { format } from "date-fns";

export default function format(req, res) {
    const {
        query: { pid },
    } = req

    res.end(`Post: ${pid}`)
}

// 詳細ページ等で使うと便利