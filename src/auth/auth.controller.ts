import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Response,
} from '@nestjs/common';
import { UserInfoDto } from 'src/user/dto/UserInfo.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any, @Response() res: any): Promise<void> {
    const { accessToken } = await this.authService.login(req.user);
    const Authorization = `Bearer ${accessToken}`;
    return res.set({ Authorization }).json();
  }

  @Post('/register')
  async register(@Body() input: UserInfoDto): Promise<void> {
    return this.userService.register(input);
  }
}
