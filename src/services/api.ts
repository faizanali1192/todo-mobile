import {API_ENDPOINTS} from '../utilities/constants';
import {axiosInstance} from './axiosConfiguration';

export interface LoginRequestType {
  username: string;
  password: string;
}
export interface LoginResponseType {
  status: string;
  data: {
    sessionId: string;
    expiresAt: Date;
  };
}

export interface SignupRequestType extends LoginRequestType {}

export interface SignupResponseType {
  status: string;
  data: {
    user: {
      id: number;
      username: string;
      password: string;
    };
  };
}

export interface LogoutResponseType {
  status: string;
}

interface TodoType {
  id: number;
  title: string;
}
interface PaginationType {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export interface TodoListingResponseType {
  statusL: string;
  data: TodoType[];
  pagination: PaginationType;
}

export interface TodoRequestType {
  title: string;
}

export interface TodoResponseType {
  status: string;
  data: TodoType;
}

export interface DeleteTodoRequestType {
  id: number;
}
export interface DeleteTodoResponseType {
  status: string;
}

export const _login = async (body: LoginRequestType) => {
  try {
    return (
      await axiosInstance.post<LoginResponseType>(API_ENDPOINTS.LOGIN, body)
    ).data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const _signup = async (body: SignupRequestType) => {
  try {
    return (
      await axiosInstance.post<SignupResponseType>(API_ENDPOINTS.SIGNUP, body)
    ).data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const _logout = async () => {
  try {
    return (await axiosInstance.post<LogoutResponseType>(API_ENDPOINTS.LOGOUT))
      .data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const _todosList = async (page?: number) => {
  try {
    const response = await axiosInstance.get<TodoListingResponseType>(
      `${API_ENDPOINTS.TODOS_LISTING}`,
      {
        params: {
          page,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    console.error('Failed to fetch todos list:', error);
    throw error.response.data;
  }
};

export const _addTodo = async (body: TodoRequestType) => {
  try {
    return (
      await axiosInstance.post<TodoResponseType>(API_ENDPOINTS.ADD_TODO, body)
    ).data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const _deleteTodo = async (param: DeleteTodoRequestType) => {
  try {
    return (
      await axiosInstance.delete<DeleteTodoResponseType>(
        `${API_ENDPOINTS.DELETE_TODO}/${param.id}`,
      )
    ).data;
  } catch (error: any) {
    throw error.response.data;
  }
};
