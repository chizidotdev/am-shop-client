type APIResponse<T> = {
  data: T;
  error: ErrorResponse;
  message: string;
  code: number;
};

interface ErrorResponse {
  message_id: string;
  message: string;
  code: number;
  reason: string;
}

type PaystackResponse = {
  message: string;
  redirecturl: string;
  reference: string;
  status: "success" | "failed";
  trans: string;
  transaction: string;
  trxref: string;
};
