// src/components/upload/StatusIndicator/index.tsx
import React from "react";
import { UploadStatus } from "../CSVUpload";
import ReadingStatus from "./ReadingStatus";
import ProcessingStatus from "./ProcessingStatus";
import SuccessStatus from "./SuccessStatus";

interface StatusIndicatorProps {
    status: UploadStatus;
    fileName: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
    status,
    fileName,
}) => {
    switch (status) {
        case "reading":
            return <ReadingStatus fileName={fileName} />;
        case "processing":
            return <ProcessingStatus />;
        case "success":
            return <SuccessStatus />;
        default:
            return null;
    }
};

export default StatusIndicator;
