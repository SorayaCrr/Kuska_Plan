-- SQL Schema for Kuska Plan - Supabase Integration

-- 1. Profiles Table (Stores user institutional configuration)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT NOT NULL,
    ie_name TEXT DEFAULT '',
    aula_name TEXT DEFAULT '',
    aula_age TEXT DEFAULT '4_anios',
    teacher_title TEXT DEFAULT '',
    school_year TEXT DEFAULT '',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to read their own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Allow users to update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

CREATE POLICY "Allow users to insert their own profile"
    ON public.profiles FOR INSERT
    WITH CHECK (auth.uid() = id);


-- 2. Students Table
CREATE TABLE public.students (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    nee TEXT[] DEFAULT '{}'::TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS for students
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to view their own students"
    ON public.students FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own students"
    ON public.students FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to update their own students"
    ON public.students FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Allow users to delete their own students"
    ON public.students FOR DELETE
    USING (auth.uid() = user_id);


-- 3. Rubrics / Evaluation Table
CREATE TABLE public.rubrics (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    student_id INT NOT NULL,
    capacity TEXT NOT NULL,
    grade TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE (student_id, capacity)
);

-- Enable RLS for rubrics
ALTER TABLE public.rubrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to view their own rubrics"
    ON public.rubrics FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own rubrics"
    ON public.rubrics FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to update their own rubrics"
    ON public.rubrics FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Allow users to delete their own rubrics"
    ON public.rubrics FOR DELETE
    USING (auth.uid() = user_id);


-- 4. Plans History Table
CREATE TABLE public.plans (
    id TEXT PRIMARY KEY, -- Stores local ID string
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT DEFAULT '',
    age TEXT DEFAULT '4_anios',
    area TEXT DEFAULT '',
    competence TEXT DEFAULT '',
    capacities TEXT[] DEFAULT '{}'::TEXT[] NOT NULL,
    situation TEXT DEFAULT '',
    free_play JSONB DEFAULT '[]'::JSONB NOT NULL,
    routines JSONB DEFAULT '{}'::JSONB NOT NULL,
    routines_checked JSONB DEFAULT '{}'::JSONB NOT NULL,
    didactic_steps JSONB DEFAULT '[]'::JSONB NOT NULL,
    transversals JSONB DEFAULT '{}'::JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS for plans
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to view their own plans"
    ON public.plans FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own plans"
    ON public.plans FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to update their own plans"
    ON public.plans FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Allow users to delete their own plans"
    ON public.plans FOR DELETE
    USING (auth.uid() = user_id);


-- 5. Trigger profile creation on Auth Sign Up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, teacher_title)
    VALUES (new.id, new.email, new.raw_user_meta_data->>'name');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
