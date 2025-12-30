create table date_status (
  id uuid primary key,
  date date not null,
  status text not null check (status in ('checkin', 'scheduled')),
  synced boolean not null default false,
  device_id uuid not null,
  user_id uuid,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for better query performance
create index date_status_date_idx on date_status(date);
create index date_status_device_id_idx on date_status(device_id);
create index date_status_user_id_idx on date_status(user_id);

-- Add RLS policies
alter table date_status enable row level security;

create policy "Enable read access for all users"
  on date_status for select
  using (true);

create policy "Enable insert for all users"
  on date_status for insert
  with check (true);

create policy "Enable update for device owner"
  on date_status for update
  using (auth.uid() = user_id or user_id is null)
  with check (auth.uid() = user_id or user_id is null);

create policy "Enable delete for device owner"
  on date_status for delete
  using (auth.uid() = user_id or user_id is null); 